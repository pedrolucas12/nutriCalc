// lib/whatsapp.ts
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function sendWhatsAppMessage(to: string, diet: string) {
  try {
    // Divide a dieta em mensagens menores se necessário
    const messages = splitDietIntoMessages(diet);

    // Envia mensagem inicial
    await client.messages.create({
      body: "Olá! Aqui está sua dieta personalizada do NutriMind 🥗",
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:+55${to}`,
    });

    // Envia a dieta em partes
    for (const message of messages) {
      await client.messages.create({
        body: message,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        to: `whatsapp:+55${to}`,
      });
    }

    return true;
  } catch (error) {
    console.error("Erro ao enviar mensagem WhatsApp:", error);
    return false;
  }
}

function splitDietIntoMessages(diet: string): string[] {
  // Divide a dieta em mensagens de até 1600 caracteres
  const maxLength = 1600;
  const messages: string[] = [];
  
  let currentMessage = "";
  const lines = diet.split("\n");

  for (const line of lines) {
    if ((currentMessage + line).length > maxLength) {
      messages.push(currentMessage);
      currentMessage = line;
    } else {
      currentMessage += line + "\n";
    }
  }

  if (currentMessage) {
    messages.push(currentMessage);
  }

  return messages;
}