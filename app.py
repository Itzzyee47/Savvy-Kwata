from flask import Flask, render_template

app = Flask(__name__)

app.secret_key = 'ndoqwi3923jd'



@app.route("/")
def index():
    # Display the landing page.

    return render_template("index.html")

@app.route("/about")
def about():
    # Display the about page.

    return render_template("about.html")


if __name__ == "__main__":
    app.run(host='localhost',debug=True, port=3030)