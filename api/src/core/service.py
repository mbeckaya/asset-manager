from sqlmodel import SQLModel
from src.database.connection import engine

class BaseService:
    def __init__(self, model: type[SQLModel]):
        self.__model = model