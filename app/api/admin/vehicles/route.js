import { NextResponse } from "next/server";
import { getVehiclesFile, saveVehiclesFile } from "@/lib/github";
import { checkAuth } from "@/lib/require-auth";

export async function GET() {
  if (!checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { vehicles } = await getVehiclesFile();
    return NextResponse.json({ vehicles });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(request) {
  if (!checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const newVehicle = await request.json();
    if (!newVehicle.id) return NextResponse.json({ error: "id manquant" }, { status: 400 });
    const { vehicles, sha } = await getVehiclesFile();
    if (vehicles.some((v) => v.id === newVehicle.id)) {
      return NextResponse.json({ error: "Un véhicule avec cet id existe déjà" }, { status: 409 });
    }
    const updated = [...vehicles, newVehicle];
    await saveVehiclesFile(updated, sha, `admin: add vehicle ${newVehicle.id}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
