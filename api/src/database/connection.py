from contextlib import asynccontextmanager
from fastapi import FastAPI
from sqlmodel import SQLModel, Session, create_engine, select
from src.user.model import User, users
from src.asset.model import Asset, assets
from src.asset.status.model import AssetStatus, asset_statuses
from src.asset.assignment.model import AssetAssignment, asset_assignments

DATABASE_URL = "mysql+pymysql://root:mysql@localhost:3306/asset_manager"

engine = create_engine(DATABASE_URL)

def seed_database() -> None:
    with Session(engine) as session:
        seed_data = [
            (User, users),
            (Asset, assets),
            (AssetAssignment, asset_assignments),
            (AssetStatus, asset_statuses),
        ]

        for model, data in seed_data:
            existing = session.exec(select(model)).first()

            if existing is None:
                session.add_all(data)

        session.commit()


@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    seed_database()

    yield