import requests

def extract_recipe(url,apiKey,id): 
    details = {}
    rec=True
    i=0
    while rec:
        try:
            response1 = requests.get(url+str(id[i])+"/information"+apiKey)
            sourceURL = response1.json()["sourceUrl"]
            
            response2 = requests.get(f"https://api.spoonacular.com/recipes/extract{apiKey}&url={sourceURL}/recipe/{id[i]}")
            recipe = response2.json()
            
            details = {"title":recipe["title"],
                       "image":recipe["image"],
                       "sourceURL":sourceURL,
                       "instructions":recipe["instructions"]}
            rec = False
            i+=1
            if "not found, error 404"==details["title"].lower(): raise IndexError
                
            return details
        except KeyError:
            continue
        except IndexError:
            return {"title":"Recipe Not Found",
                    "image":"https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "instructions":"Try using different keywords"
                    }
### API keys ###
#bfba3e4680bc4db9ad583090614aefe4
#2f80457e569847e28cc30d2c526bf253
#142b9a01a66a498086e85496068dbb3c

def query_recipe(**kwargs): 
    try: 
        baseurl = "https://api.spoonacular.com/recipes/complexSearch"
        apiKey = "?apiKey=2f80457e569847e28cc30d2c526bf253"
        url = baseurl + apiKey
        for key, value in kwargs.items():  url += "&" + key + "=" + value
        response = requests.get(url)
        results = response.json()["results"]
        id = [x['id'] for x in results]
        details = extract_recipe(f"https://api.spoonacular.com/recipes/",apiKey,id)
        return details
        
    except KeyError:
        print(response.json())
    
    
    