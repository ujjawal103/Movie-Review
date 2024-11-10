const express = require('express')
const multer  = require('multer')

const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');


const app = express()
let port = 8080;
const path = require("path");
const { count } = require('console');

const storage = multer.diskStorage({
    destination: './public/images/uploads', // Folder where images will be saved
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage: storage });
app.use(express.urlencoded({ extended: true}));

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride('_method'));
let incorrectPass = 0;
let { password } = {password : "empty"};
let currUser ="";                      // they ensure that on switchin in login time from one user to another user then the "Incorrect password" will not be shown (if previous one password was incorrect)
let previousUser="";
let users = [
    {
        name : "Vikas Tiwari",
        pass : 7607674205,
    },
    {
        name : "Satyam Raj",
        pass : 9119869107,
    },
    {
        name : "Satyam Sharma",
        pass : 9621965441,
    },
    {
        name : "Shailendra Singh",
        pass : 8052200225,
    },
    {
        name : "Ujjawal Jaiswal",
        pass : 7800466039,
    },
    {
        name : "Dheeraj Singh",
        pass : 7800337275,
    },
];

let Satyam_Raj = [
    {
        id:"101",
        username: 'Satyam Raj',
        movie: 'Chhichhore',
        review: `Chhichhore is a touching film about friendship, resilience, and life’s pressures, delivering a heartfelt message on failure and success.`,
        imagePath: '/images/uploads\\1730662531299.webp',
        rating: '4'
      },
      {
        id:"102",
        username: 'Satyam Raj',
        movie: 'Genius',
        review: "Genius is an engaging Bollywood thriller featuring a young genius fighting corruption, with strong performances, action, and emotional twists.",
        imagePath: '/images/uploads\\1730662463799.jpeg',
        rating: '5'
      }
];
let Satyam_Sharma = [
    {
        id:"103",
        username: 'Satyam Sharma',
        movie: 'Singham Again',
        review: "Singham Again falls short of its predecessors with a predictable story, dull dialogues, and a slow, repetitive feel.",
        imagePath: '/images/uploads\\1730662908787.jpg',
        rating: '1'
      },
      {
        id:"104",
        username: 'Satyam Sharma',
        movie: 'Jawan',
        review: "Jawan is a high-stakes action film with Shah Rukh Khan’s powerful dual role, thrilling action, and a resonant social message, making it a must-watch.",
        imagePath: '/images/uploads\\1730662804344.jpeg',
        rating: '4'
      }
];
let Vikas_Tiwari = [
    {
        id:"105",
        username: 'Vikas Tiwari',
        movie: 'HACKED',
        review: "Hacked is a suspenseful thriller about obsession and technology, with strong performances and intense plot twists that keep viewers hooked.",
        imagePath: '/images/uploads\\1730662704678.jpeg',
        rating: '4'
      },
      {
        id:"106",
        username: 'Vikas Tiwari',
        movie: 'WAR',
        review: 'WAR is a thrilling action film featuring Hrithik Roshan and Tiger Shroff in an intense cat-and-mouse chase, highlighted by stunning visuals and electrifying action scenes.',
        imagePath: '/images/uploads\\1730662654282.jpeg',
        rating: '3'
      }
];
let Shailendra_Singh = [
    {
        id:"107",
        username: 'Shailendra Singh',
        movie: 'Kalki 2898 AD',
        review: 'Kalki 2898 AD is a futuristic sci-fi film blending mythology with intense storytelling, featuring Prabhas in a visually stunning, action-packed experience.',
        imagePath: '/images/uploads\\1730662086396.webp',
        rating: '4'
      },
      {
        id:"108",
        username: 'Shailendra Singh',
        movie: 'KGF',
        review: 'KGF is a gripping action drama featuring Yash as Rocky, with intense storytelling, powerful visuals, and memorable scenes.',
        imagePath: '/images/uploads\\1730662034949.jpeg',
        rating: '4'
      },
      {
        id:"109",
        username: 'Shailendra Singh',
        movie: 'Salaar',
        review: 'Salaar is an action-packed South Indian film with intense fight scenes and Prabhas delivering a powerful performance in a gripping storyline.',
        imagePath: '/images/uploads\\1730662007538.jpeg',
        rating: '5'
      }
];
let Ujjawal_Jaiswal = [
    {
        id:"110",
        username: 'Ujjawal Jaiswal',
        movie: 'My Girlfriend is an Alien',
        review: 'My Girlfriend is an Alien is a charming romantic-comedy series, mixing sci-fi with humor and heartwarming moments.',
        imagePath: '/images/uploads\\1730661959049.webp',
        rating: '5'
      },
      {
        id:"111",
        username: 'Ujjawal Jaiswal',
        movie: 'Put Your Head on My Shoulder',
        review: 'Put Your Head on My Shoulder is a charming C-drama that captures young love and self-discovery with delightful chemistry and a heartwarming story.',
        imagePath: '/images/uploads\\1730661918715.jpeg',
        rating: '3'
      }
];
let Dheeraj_Singh = [
    {
        id:"112",
        username: 'Dheeraj Singh',
        movie: 'pathan',
        review: 'Pathaan is a thrilling Bollywood action film with Shah Rukh Khan delivering a charismatic performance as a fearless spy.',
        imagePath: '/images/uploads\\1730662262972.jpeg',
        rating: '3'
      },
      {
        id:"113",
        username: 'Dheeraj Singh',
        movie: 'Pushpa',
        review: 'Pushpa is an intense action-drama featuring Allu Arjun’s powerful performance in a thrilling story of rebellion and survival.',        
        imagePath: '/images/uploads\\1730662203057.jpeg',
        rating: '4'
      }
];
let allPosts = [
    {
        id:"101",
        username: 'Satyam Raj',
        movie: 'Chhichhore',
        review: 'Chhichhore is a touching film about friendship, resilience, and life’s pressures, delivering a heartfelt message on failure and success.',
        imagePath: '/images/uploads\\1730662531299.webp',
        rating: '4'
      },
      {
        id:"113",
        username: 'Dheeraj Singh',
        movie: 'Pushpa',
        review: 'Pushpa is an intense action-drama featuring Allu Arjun’s powerful performance in a thrilling story of rebellion and survival.',        
        imagePath: '/images/uploads\\1730662203057.jpeg',
        rating: '4'
      },
      {
        id:"103",
        username: 'Satyam Sharma',
        movie: 'Singham Again',
        review: "Singham Again falls short of its predecessors with a predictable story, dull dialogues, and a slow, repetitive feel.",
        imagePath: '/images/uploads\\1730662908787.jpg',
        rating: '1'
      },
      {
        id:"105",
        username: 'Vikas Tiwari',
        movie: 'HACKED',
        review: "Hacked is a suspenseful thriller about obsession and technology, with strong performances and intense plot twists that keep viewers hooked.",
        imagePath: '/images/uploads\\1730662704678.jpeg',
        rating: '4'
      },
      {
        id:"112",
        username: 'Dheeraj Singh',
        movie: 'pathan',
        review: 'Pathaan is a thrilling Bollywood action film with Shah Rukh Khan delivering a charismatic performance as a fearless spy.',
        imagePath: '/images/uploads\\1730662262972.jpeg',
        rating: '3'
      },
      {
        id:"108",
        username: 'Shailendra Singh',
        movie: 'KGF',
        review: `KGF is a gripping action drama featuring Yash as Rocky, with intense storytelling, powerful visuals, and memorable scenes.`,
        imagePath: '/images/uploads\\1730662034949.jpeg',
        rating: '4'
      },
      {
        id:"110",
        username: 'Ujjawal Jaiswal',
        movie: 'My Girlfriend is an Alien',
        review: 'My Girlfriend is an Alien is a charming romantic-comedy series, mixing sci-fi with humor and heartwarming moments.',
        imagePath: '/images/uploads\\1730661959049.webp',
        rating: '5'
      },
      {
        id:"106",
        username: 'Vikas Tiwari',
        movie: 'WAR',
        review: 'WAR is a thrilling action film featuring Hrithik Roshan and Tiger Shroff in an intense cat-and-mouse chase, highlighted by stunning visuals and electrifying action scenes.',
        imagePath: '/images/uploads\\1730662654282.jpeg',
        rating: '3'
      },
      {
        id:"107",
        username: 'Shailendra Singh',
        movie: 'Kalki 2898 AD',
        review: 'Kalki 2898 AD is a futuristic sci-fi film blending mythology with intense storytelling, featuring Prabhas in a visually stunning, action-packed experience.',
        imagePath: '/images/uploads\\1730662086396.webp',
        rating: '4'
      },
      {
        id:"104",
        username: 'Satyam Sharma',
        movie: 'Jawan',
        review: "Jawan is a high-stakes action film with Shah Rukh Khan’s powerful dual role, thrilling action, and a resonant social message, making it a must-watch.",
        imagePath: '/images/uploads\\1730662804344.jpeg',
        rating: '4'
      },
      {
        id:"109",
        username: 'Shailendra Singh',
        movie: 'Salaar',
        review: 'Salaar is an action-packed South Indian film with intense fight scenes and Prabhas delivering a powerful performance in a gripping storyline.',
        imagePath: '/images/uploads\\1730662007538.jpeg',
        rating: '5'
      },
      {
        id:"111",
        username: 'Ujjawal Jaiswal',
        movie: 'Put Your Head on My Shoulder',
        review: 'Put Your Head on My Shoulder is a charming C-drama that captures young love and self-discovery with delightful chemistry and a heartwarming story.',
        imagePath: '/images/uploads\\1730661918715.jpeg',
        rating: '3'
      },
      {
        id:"102",
        username: 'Satyam Raj',
        movie: 'Genius',
        review: "Genius is an engaging Bollywood thriller featuring a young genius fighting corruption, with strong performances, action, and emotional twists.",
        imagePath: '/images/uploads\\1730662463799.jpeg',
        rating: '5'
      }  
];

app.get("/",function(req,res){
    res.render("allPosts.ejs",{ allPosts })
})
app.get("/users",function(req,res){
    res.render("users.ejs" ,{ users });
    password.password = "empty";
})

app.get("/users/:username",function(req,res){
    let { username } = req.params;
    currUser = username;
    if(previousUser == currUser){
        incorrectPass=1;
    }
    else if((previousUser != currUser)&&(previousUser != "" && currUser !="")){
        incorrectPass=0;
    }  
    let {name , pass} = users.find((ele) => ele.name === username);
    res.render("enterPass.ejs",{ name , pass , incorrectPass});

})


app.get("/users/:username/profile",function(req,res){
    let { username } = req.params;
    let {name , pass} = users.find((ele) => ele.name === username);
    let arrayname = name.replace(" ","_");

    if(pass === parseInt(password.password)){
        incorrectPass=0;
        if(arrayname === "Shailendra_Singh"){
            let posts = Shailendra_Singh;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Satyam_Raj"){
            let posts = Satyam_Raj;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Satyam_Sharma"){
            let posts = Satyam_Sharma;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Ujjawal_Jaiswal"){
            let posts = Ujjawal_Jaiswal;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Vikas_Tiwari"){
            let posts = Vikas_Tiwari;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Dheeraj_Singh"){
            let posts = Dheeraj_Singh;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
    }
    else if(pass !== parseInt(password.password) || password.password == "empty"){
        incorrectPass=2;
        res.redirect(`/users/${name}/`);
    }

    
})



app.post("/users/:username/profile", function(req,res){
    let { username } = req.params;
    password  = req.body;                               //making global for direct get request
    let {name , pass} = users.find((ele) => ele.name === username);
    // let arrayname = name.replace(" ","_");
    previousUser = username;

    if(pass === parseInt(password.password)){
        incorrectPass=0;
        res.redirect(`/users/${name}/profile`)
    }
    else{
        incorrectPass=1;
        res.redirect(`/users/${name}/`);
    }
    
})


app.get("/users/:username/new" , function(req,res){
    let { username } = req.params;
    let {name , pass} = users.find((ele) => ele.name === username);
    res.render("newMovie.ejs", { name })
})
app.post("/users/:username/new",upload.single('image'), function(req,res){
    let { username } = req.params;
    let { movie, review, rating } = req.body;
    let  id  = uuidv4();
    let arrayname = username.replace(" ","_");
    let imagePath = req.file ? req.file.path : null;
    if(imagePath != null){
        imagePath = imagePath.replace("public\\","/");
        imagePath = imagePath.replace("\\","/");
    }
    

    if(arrayname === "Shailendra_Singh"){
        Shailendra_Singh.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Satyam_Raj"){
        Satyam_Raj.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Satyam_Sharma"){
        Satyam_Sharma.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Ujjawal_Jaiswal"){
        Ujjawal_Jaiswal.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Vikas_Tiwari"){
        Vikas_Tiwari.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Dheeraj_Singh"){
        Dheeraj_Singh.unshift({id, username ,movie , review , imagePath , rating});
    }
    
    allPosts.unshift({id, username ,movie , review , imagePath , rating});
    // console.log(allPosts);
    res.redirect(`/users/${username}/profile`);
})



app.patch("/users/:username/:id/edit",function(req,res){
  let {username, id } = req.params;
  let arrayname = username.replace(" ","_");
   let post;
   let fromAllPost;
  if(arrayname === "Shailendra_Singh"){
   post = Shailendra_Singh.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Raj"){
   post = Satyam_Raj.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Sharma"){
   post = Satyam_Sharma.find((ele)=>ele.id === id);
}
else if(arrayname === "Ujjawal_Jaiswal"){
   post = Ujjawal_Jaiswal.find((ele)=>ele.id === id);
}
else if(arrayname === "Vikas_Tiwari"){
   post = Vikas_Tiwari.find((ele)=>ele.id === id);
}
else if(arrayname === "Dheeraj_Singh"){
   post = Dheeraj_Singh.find((ele)=>ele.id === id);
}


res.render("editMovie.ejs",{ post });
})


app.post("/users/:username/:id/edit",upload.single('image'),function(req,res){
  let {username, id } = req.params;
  let { movie, review, rating } = req.body;
  let imagePath = req.file ? req.file.path : null;
  if(imagePath != null){
      imagePath = imagePath.replace("public\\","/");
      imagePath = imagePath.replace("\\","/");
  }

  let arrayname = username.replace(" ","_");
   let post;
   let fromAllPost;
  if(arrayname === "Shailendra_Singh"){
   post = Shailendra_Singh.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Raj"){
   post = Satyam_Raj.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Sharma"){
   post = Satyam_Sharma.find((ele)=>ele.id === id);
}
else if(arrayname === "Ujjawal_Jaiswal"){
   post = Ujjawal_Jaiswal.find((ele)=>ele.id === id);
}
else if(arrayname === "Vikas_Tiwari"){
   post = Vikas_Tiwari.find((ele)=>ele.id === id);
}
else if(arrayname === "Dheeraj_Singh"){
   post = Dheeraj_Singh.find((ele)=>ele.id === id);
}

fromAllPost = allPosts.find((ele)=>ele.id === id);

post.movie = movie;
post.review = review;
post.rating = rating;
if(imagePath !== null){
  post.imagePath = imagePath;
}


fromAllPost.movie = movie;
fromAllPost.review = review;
fromAllPost.rating = rating;
if(imagePath !== null){
  fromAllPost.imagePath = imagePath;
}

// console.log(movie , review ,rating , imagePath);

// console.log(post , fromAllPost);

res.redirect(`/users/${username}/profile`);
})






app.delete("/users/:username/:id",function(req,res){
  let {username, id } = req.params;
  let arrayname = username.replace(" ","_");
  if(arrayname === "Shailendra_Singh"){
    Shailendra_Singh = Shailendra_Singh.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Satyam_Raj"){
    Satyam_Raj = Satyam_Raj.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Satyam_Sharma"){
    Satyam_Sharma = Satyam_Sharma.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Ujjawal_Jaiswal"){
    Ujjawal_Jaiswal = Ujjawal_Jaiswal.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Vikas_Tiwari"){
    Vikas_Tiwari = Vikas_Tiwari.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Dheeraj_Singh"){
    Dheeraj_Singh = Dheeraj_Singh.filter((ele)=>ele.id !== id);
 }
 
 allPosts = allPosts.filter((ele)=>ele.id !== id);

 res.redirect(`/users/${username}/profile`);
})





app.listen(port , function(req , res){
    console.log("listen on port : 8080");
})