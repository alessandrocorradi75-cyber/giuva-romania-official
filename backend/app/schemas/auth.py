from pydantic import BaseModel, EmailStr

from app.models.enums import UserRole


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    role: UserRole = UserRole.PUBLIC
