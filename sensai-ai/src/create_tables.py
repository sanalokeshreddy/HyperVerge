import asyncio
# This imports the 'init_db' function from 'src/api/db/__init__.py'
from api.db import init_db


async def main():
    """Manually initializes the database and creates all tables."""
    print(">>> Manually initializing the database...")
    await init_db()
    print(">>> Database initialization complete. Tables are now created.")


if __name__ == "__main__":
    asyncio.run(main())