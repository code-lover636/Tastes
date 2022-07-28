from flask import Flask, render_template, request
from recipe import *

app = Flask(__name__)

@app.route("/")
def homePage():
    return render_template("index.html")

@app.route("/about")
def aboutPage():
    return render_template("about.html")

@app.route("/findrecipe", methods =["GET", "POST"])
def findPage():
    return render_template("find.html")

@app.route("/recipe", methods =["GET", "POST"])
def recipePage(query=None):
    if request.method == "POST":
       query = request.form.get("search").strip().lower()
    elif request.method == "GET":
        query = request.args.get("card")
    details = query_recipe(query=query)
        
    if query!="": return render_template("recipe.html",details=details)
    else: return render_template("find.html")


if __name__ == "__main__":
    app.run()