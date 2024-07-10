import mysql.connector

database = mysql.connector.connect(
    host='localhost',
    user='root',
    password='Admin',
    database='computadoras',
    port='3306',
)

micursor=database.cursor()
micursor.execute("SHOW DATABASES")

consulta = micursor.fetchall()

print(consulta)
