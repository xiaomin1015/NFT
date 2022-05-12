# Changes this IMAGES_BASE_URL to yours
import json


IMAGES_BASE_URL = "https://gateway.pinata.cloud/ipfs/QmaaTzThAZum4fiZXNUMeRgeZSxU2YPnQcmd8kchdQ2gMo/"
PROJECT_NAME = "ZZ_Bear"
pre = 96
Collection = ["Landscape", "Portrait", ]


def getAttribute(key, value):
    return {
        "trait_type": key,
        "value": value
    }


for i in range(1, 5):
    token_id = i + pre
    token = {
        "image": IMAGES_BASE_URL + str(token_id) + '.png',
        "tokenId": token_id,
        "name": PROJECT_NAME + '_' + str(token_id),
        "description": "AI Generative Art of diffrent style and content, some of them are unorthodox and experimental, some look just like fine art paintings created by specific artists",
        "attributes": []
    }
    token["attributes"].append(getAttribute(
        "Artist style", "Unknown"))
    token["attributes"].append(getAttribute("Collection", Collection[0]))
    token["attributes"].append(getAttribute("Series", "beauty and beast"))
    token["attributes"].append(getAttribute("ID in this series", i))

    with open('./metadata/' + str(token_id), 'w') as outfile:
        json.dump(token, outfile, indent=4)
