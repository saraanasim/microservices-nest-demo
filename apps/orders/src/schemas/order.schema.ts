import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Order extends AbstractDocument {

    @Prop({ type: String })
    name: string

    @Prop({type:Number})
    price: number

    @Prop({type:String})
    phoneNumber: string
}

export const OrderSchema=SchemaFactory.createForClass(Order)