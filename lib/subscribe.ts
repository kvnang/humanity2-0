export async function subscribe({ email }: { email: string }) {
  const audience = `72413ea2-2e83-4624-9943-efd56292ff7a`;
  const endpoint = `https://api.resend.com/audiences/${audience}/contacts`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      unsubscribed: false,
    }),
  });

  const json = await res.json();

  if (!json.id) {
    throw new Error("Failed to subscribe");
  }
}
