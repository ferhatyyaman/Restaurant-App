import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer CKG4JnPQvpmjRMT2ioBJYkKI5ubeLZ69A_4z3U2ibVOh3RtZ8pqqsfq1F-_ouR7R_vibHWswgnx8Gv79X_3R9QSwu6tcJPeRWIUGBqnYJRccregcs5-pVbbKYf2kZXYx',
    },
})