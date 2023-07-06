class Item:
    def __init__(self, name, quantity):
        self.name = name
        self.quantity = quantity

class Inventory:
    def __init__(self):
        self.items = []

    def add_item(self, name, quantity):
        self.items.append(Item(name, quantity))

    def update_item(self, name, quantity):
        for item in self.items:
            if item.name == name:
                item.quantity = quantity
                break

inventory = Inventory()

# Add initial items
inventory.add_item('Toothbrush', 200)
inventory.add_item('Dental Floss', 150)
inventory.add_item('Mouthwash', 100)
# Add more items...
