export async function submitContactForm(data: { name: string; email: string; message: string }) {
  await new Promise(resolve => setTimeout(resolve, 650));
  if (!data.name || !data.email || !data.message) {
    throw new Error("Please complete all fields.");
  }
  return { ok: true };
}
