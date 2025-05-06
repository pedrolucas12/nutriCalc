// app/api/create-payment/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const { whatsapp } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Dieta Personalizada NutriMind",
              description: "Plano alimentar personalizado gerado por IA",
            },
            unit_amount: 2990, // R$ 29,90 em centavos
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&whatsapp=${whatsapp}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: {
        whatsapp,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erro ao criar sessão:", error);
    return NextResponse.json({ error: "Erro ao processar pagamento" }, { status: 500 });
  }
}