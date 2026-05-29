const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getEvents() {
  const res = await fetch(`${API_URL}/api/events`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Could not fetch events");
  }

  return res.json();
}

export async function getAbout() {
  const res = await fetch(`${API_URL}/api/about`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Could not fetch about");
  }

  return res.json();
}

export async function getGallery() {
  const res = await fetch(`${API_URL}/api/gallery`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Could not fetch gallery");
  }

  return res.json();
}

export async function getFestival() {
  const res = await fetch(`${API_URL}/api/festival`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Could not fetch festivals");
  }

  return res.json();
}