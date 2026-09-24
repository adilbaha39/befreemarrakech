import { NextResponse } from "next/server";
import { getVehiclesFile, saveVehiclesFile } from "@/lib/github";
import { checkAuth } from "@/lib/require-auth";

export async function PUT(request, { params }) {
  if (!checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const updates = await request.json();
    const { vehicles, sha } = await getVehiclesFile();
    const idx = vehicles.findIndex((v) => v.id === params.id);
    if (idx === -1) return NextResponse.json({ error: "Véhicule introuvable" }, { status: 404 });
    vehicles[idx] = { ...vehicles[idx], ...updates, id: params.id };
    await saveVehiclesFile(vehicles, sha, `admin: update vehicle ${params.id}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  if (!checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { vehicles, sha } = await getVehiclesFile();
    const filtered = vehicles.filter((v) => v.id !== params.id);
    if (filtered.length === vehicles.length) {
      return NextResponse.json({ error: "Véhicule introuvable" }, { status: 404 });
    }
    await saveVehiclesFile(filtered, sha, `admin: delete vehicle ${params.id}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
