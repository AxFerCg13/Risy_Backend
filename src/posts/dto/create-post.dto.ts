import { IsEAN, IsEnum, IsInt, IsMongoId, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { ObjectId } from "typeorm";


enum PostType {
    SALE = "sale",
    DONATE = "donate",
    COMPOSED = "compose",
}

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    originalPrice: string;

    @IsString()
    @IsNotEmpty() // test comment
    price: string;

    @IsString()
    @IsNotEmpty()
    details: string;

    @IsEnum(PostType)
    @IsNotEmpty()
    type: PostType;

    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    providerId: number;
}
