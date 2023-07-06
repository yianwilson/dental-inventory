from flask import Flask, render_template, request, redirect, url_for
from .inventory import inventory

app = Flask(__name__)

@app.route('/')
def show_inventory():
    return render_template('index.html', inventory=inventory.items)

@app.route('/update', methods=['POST'])
def update_inventory():
    for item in inventory.items:
        if item.name in request.form:
            item.quantity = int(request.form[item.name])
    return redirect(url_for('show_inventory'))
