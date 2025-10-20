from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

dburl = f"mysql+pymysql://{os.getenv("dbuser")}:{os.getenv("dbpassword")}@{os.getenv("dbhost")}: {os.getenv("dbport")}/{os.getenv("dbname")}"
engine = create_engine(dburl)
sessionmaker(bind=engine) 