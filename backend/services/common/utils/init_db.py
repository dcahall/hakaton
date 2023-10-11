from common.config import DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER
from sqlalchemy import create_engine, text

e = create_engine(
    f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)


def execute_sql(sql_file):
    if not e.dialect.has_table(e.connect(), "users"):
        with open(sql_file, "r", encoding="UTF-8") as f:
            sql = text(f.read())
        with e.connect() as con:
            con.execute(sql)
    else:
        print("Таблица уже существуeт")


if __name__ == "__main__":
    execute_sql("common/utils/init_db.sql")
