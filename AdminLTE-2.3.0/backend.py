import MySQLdb
from flask import Flask, render_template , jsonify ,request
import json
from flask.ext.cors import CORS

app = Flask(__name__)

db = MySQLdb.connect("localhost", "root", "comtreasure89_A", "mentors")
cursor_posts = db.cursor()

@app.route("/")
def show_add_mentors_page():
    return render_template("Add_Mentor.html")


@app.route("/starter")
def show_starter_page():
    return render_template("starter.html")

@app.route("/profile")
def show_profile_page():
    return render_template("profile.html")

@app.route("/stats")
def show_stats_page():
    return render_template("stats.html")

@app.route("/viewmentor")
def show_view_mentors_page():
    return render_template("viewmentor.html")

@app.route("/login")
def show_login_page():
    return render_template("login.html")


@app.route('/getmentors/', methods=["post"])
def get_mentors():
    # print request.form.get('name')
    # print request.form.get('email')
    # print request.form.get('linkedinUrl')
    # print request.form.get('role')
    # print request.form.get('skills')
    # print request.form.get('notes')
    # print request.form.get('photo')
    # print request.form.get('bio')
    # print request.form.get('location')
    query_posts = "INSERT INTO Mentors (Name, Email, LinkedIn, Role, Location, Bio, Skills, Notes)  VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')"  %(request.form.get('name'),request.form.get('email'), request.form.get('linkedinUrl'),request.form.get('role'),request.form.get('location'),request.form.get('bio'),request.form.get('skills'),request.form.get('notes'))
    print query_posts
    cursor_posts.execute(query_posts)
    db.commit()
    return json.dumps({})

@app.route('/receivementors/')
def receive_mentors():
    cursor_posts.execute("SELECT * from Mentors")
    rows = cursor_posts.fetchall()
    return json.dumps(rows)


@app.route('/searchmentors/')
def search_mentors():
    q = request.args.get('q')
    print q
    query = "SELECT * from Mentors where Name = '%s' OR Skills = '%s'" % (q,q)
    print query
    cursor_posts.execute(query)
    rows = cursor_posts.fetchall()
    return json.dumps(rows)    

@app.route('/searchmentorsbyskillset/',methods=["post"])
def search_mentorsbyskillset():
    cursor_posts.execute("SELECT * from Mentors where Skills = request.form.get('skills')")
    db.commit()
    return json.dumps({})    

if __name__ == '__main__':
    app.debug = True
    # cors = CORS(app, resources={r"*": {"origins": "*"}})
    app.run()



