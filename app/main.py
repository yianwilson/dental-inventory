from flask import Flask, render_template

app = Flask(__name__)

# Sample inventory data. Replace with actual data or database connection
INVENTORY = [
    {'item': 'Toothbrush', 'quantity': 200},
    {'item': 'Dental Floss', 'quantity': 150},
    {'item': 'Mouthwash', 'quantity': 100},
    # add more items...
]

@app.route('/')
def inventory():
    return render_template('inventory.html', inventory=INVENTORY)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
