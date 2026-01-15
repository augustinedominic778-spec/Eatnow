# This script will download the images for the EatNow menu.
# Create the images directory if it doesn't exist
if (-not (Test-Path -Path "images" -PathType Container)) {
    New-Item -ItemType Directory -Path "images"
}

# Image URLs and filenames
$images = @(
    @{
        uri = "https://images.unsplash.com/photo-1546964124-6cce46313943?auto=format&fit=crop&w=800&q=80"
        filename = "premium_ribeye_steak.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1595295333158-4742f28f531d?auto=format&fit=crop&w=800&q=80"
        filename = "truffle_tagliatelle.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1551248429-40974f4b5a4a?auto=format&fit=crop&w=800&q=80"
        filename = "mediterranean_salad.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80"
        filename = "classic_wagyu_burger.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
        filename = "spicy_tuna_roll.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80"
        filename = "chicken_parmesan.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1598021680135-26a190a29393?auto=format&fit=crop&w=800&q=80"
        filename = "margherita_pizza.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1542826438-c2e245543a32?auto=format&fit=crop&w=800&q=80"
        filename = "chocolate_lava_cake.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1519708227418-c8fd9a3a2750?auto=format&fit=crop&w=800&q=80"
        filename = "grilled_salmon.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1598214886392-5e62c65a05b1?auto=format&fit=crop&w=800&q=80"
        filename = "lobster_bisque.jpg"
    }
    @{
        uri = "https://images.unsplash.com/photo-1596450514735-396264f5d983?auto=format&fit=crop&w=800&q=80"
        filename = "smokey_jollof_rice.jpg"
    }
    @{
        uri = "https://i.ytimg.com/vi/bVj-j2p1lYw/maxresdefault.jpg"
        filename = "pounded_yam_egusi.jpg"
    }
    @{
        uri = "https://guardian.ng/wp-content/uploads/2017/04/Suya-Meat.jpg"
        filename = "spicy_suya_platter.jpg"
    }
    @{
        uri = "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/dodo-fried-plantain.jpg"
        filename = "fried_plantain_dodo.jpg"
    }
    @{
        uri = "https://scontent.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/90022373_206979247222168_9039323332386126685_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=EZjQc4g5nJgAX88W3K-&oh=e10696981883313276166a93b484501b&oe=5F5B7319"
        filename = "pepper_soup_goat.jpg"
    }
    @{
        uri = "https://www.simplyrecipes.com/thmb/8caxM8_4_uZaW_Jnewf9_DbSSTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Ofada-Stew-LEAD-03-22e636a6e2904564889c36952a29738f.jpg"
        filename = "ofada_rice.jpg"
    }
)

# Download each image
foreach ($image in $images) {
    try {
        Invoke-WebRequest -Uri $image.uri -OutFile "images\$($image.filename)"
        Write-Host "Successfully downloaded $($image.filename)"
    }
    catch {
        Write-Host "Failed to download $($image.filename)"
    }
}
