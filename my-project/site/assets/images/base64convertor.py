import base64

with open("flashcard1.png", "rb") as image_file:
    encoded_string_1 = base64.b64encode(image_file.read())

with open("flashcard2.png", "rb") as image_file:
    encoded_string_2 = base64.b64encode(image_file.read())

print(encoded_string_1)

print(encoded_string_2)