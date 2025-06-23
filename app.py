from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


@app.route('/blog')
def blog():
    return render_template('blog.html')


@app.route("/works")
def works():
    return render_template("works.html")




# Add more routes as needed
if __name__ == '__main__':
    app.run(debug=True)