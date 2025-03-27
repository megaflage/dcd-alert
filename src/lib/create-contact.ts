"use server";

import { db } from "@/db";
import { contact } from "@/db/schema";
import type { ContactInfo } from "@/types/contacts";
import { and, eq } from "drizzle-orm";

export async function createContact(contactInfo: ContactInfo) {
    console.log("Checking for existing contact with phone:", contactInfo.phone);
    console.log("For user:", contactInfo.userId);
    
    const existingContact = await db.query.contact.findFirst({
        where: and(
            eq(contact.phone, contactInfo.phone),
            eq(contact.userId, contactInfo.userId)
        ),
        with: {
            user: true 
        }
    });

    console.log("Existing contact found:", existingContact);

    if (existingContact){
        console.log("A contact with this phone number already exists");
        throw new Error("A contact with this phone number already exists");
    }

    try {
        console.log("Attempting to create new contact...");
        const newContact = await db.insert(contact).values({
            userId: contactInfo.userId,
            name: contactInfo.name,
            email: contactInfo.email,
            phone: contactInfo.phone,
            createdAt: new Date(),
            updatedAt: new Date(),
        }).returning();
        
        console.log("New contact created:", newContact);
        return { success: true, data: newContact };
    } catch (error) {
        console.error("Error creating contact:", error);
        throw new Error("Failed to create contact");
    }
} 