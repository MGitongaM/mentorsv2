import { makeStyles } from "@material-ui/core/styles";


const useStyles=makeStyles(()=>({
    site:{
        boxSizing:"border-box",
        fontFamily:"Montserrat"
    },
    // Hero Section 
    heroSection:{
         backgroundColor:"rgba(111, 56, 148, 0.6)",
         position:"relative",
         height:"80vh",
     },
     heroVideo1:{
         position:"absolute",
         zIndex:"-1",
         top:"0",
         left:"0",
         width:"100vw",
         height:"80vh",
         objectFit:"cover",
     },
    heroDiv:{
        display:"grid",
        justifyItems:"center",
        padding:"5rem 0",
    },
    heroHeader:{
        color:"#FFF",
        fontSize:'3rem',
        fontWeight:"800", 
        width:"70%",
        textAlign:"center",
    },
    heroText:{
        color:"#FFF",
        fontSize:"2rem",
        fontWeight:"400",
        fontFamily:"Poppins", 
        textAlign:"center",
    },
    heroBtn:{
        width:"40%",
        backgroundColor:"#F69126",
        color:"#FFF",
        borderRadius:"2rem",
    },

    // Tomorrow(tr) Section
    trDiv1:{
        display:"grid",
        justifyItems:"center",
        width:"80%",
        margin:"0 auto",
    },
    trHeader:{
        // color:"linear-gradient(103.08deg, #6F3894 4.4%, #713996 4.42%, #733B97 4.44%, #904DAB 37.16%, #BA68C8 70.87%, #E3A4A6 144.04%, #FCC892 176.12%)",
        color:"purple",
        fontSize:'3rem',
        fontWeight:"800",
        textAlign:"center",
    },
    trText:{
        color:"#373737",
        fontSize:"2rem",
        fontWeight:"400",
        fontFamily:"Poppins",
        width:"60%",
        textAlign:"center",
        margin:"0 0 1rem",
    },
    trDiv2:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(5rem,17rem))",
        justifyContent:"space-between",
        width:"80%",
        margin:"0 auto 10rem",
       

    },
    trImg:{
        width:"100%",
        height:"100%",
        objectFit:"contain",
    },
    trText2:{
        textAlign:"center",
    },

    // Types of mentorship(mn) Section

    mnDiv1:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(5rem,17rem))",

    },
    mnDiv2:{
        
        background:"linear-gradient(129.53deg, #6F3894 17.45%, #421660 72.61%)",
        color:"#FFF",
        textAlign:"start",
        paddingLeft:"2rem"
    },
    mnDiv2Header:{
        fontSize:"3rem",
        fontWeight:"bolder",
        // width:"90%",
        // margin:"0",
    },
    mnDiv2SubHeader:{
        fontSize:"2rem",
        fontWeight:"bold",
        // margin:"0",
    },
    mnDiv2Text:{
        fontSize:"1rem",
    },
    mnImg:{
        width:"100%",
        height:"100%",
        objectFit:"cover",
    },

    // our Mentors(om) Section 
    omHeader:{
        color:"linear-gradient(103.08deg, #6F3894 4.4%, #713996 4.42%, #733B97 4.44%, #904DAB 37.16%, #BA68C8 70.87%, #E3A4A6 144.04%, #FCC892 176.12%)",
        textAlign:"center",
        fontSize:"3rem",
    },
    omDiv1:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(15rem,25rem))",
        gap:"1.5rem",
        justifyContent:"space-evenly",
        
    },
    omDiv2:{
        margin:"2rem 0",
        backgroundColor:"grey",
        borderRadius:"2rem",

    },
    omName:{
        fontWeight:"bold",
        textAlign:"center",
    },
    omRole:{
        color:"grey",
        textAlign:"center",
    },
    omImg:{
        width:"100%",
        height:"100%",
        objectFit:"contain",
    },

    // Testimonials(t) Section 
    tHeader:{
        color:"purple",
        textAlign:"center",
    },
    tDivParent:{
        backgroundColor:"#F0F0F0",
        padding:"4rem 0",
    },
    tDiv1:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(10rem, 1fr))",
        gap:"2rem",
        alignItems:"center",
        justifyItems:"center",
        backgroundColor:"#FFF",
        borderRadius:"2rem",
        width:"70%",
        margin:"2rem auto"
    },
    // Register(r) section
    rDiv1:{
        backgroundColor:"#F0F0F0",
        width:"50%",
        margin:"2rem auto",
        padding:"1rem 0",
        borderRadius:"1rem"
    },
    rDiv2:{
        backgroundColor:"#F0F0F0",
        width:"50%",
        margin:"2rem auto",
        padding:"1rem 0",
        borderRadius:"1rem",
        display:"grid",
        gridTemplateColumns:"1fr",
        textAlign:"center",
    },
    rHeader:{
        textAlign:"center",
    },
    rText:{
        color:"gray",
        textAlign:"center",
    },
    rBtn1:{
        background:"linear-gradient(91.88deg, #A660B2 7.42%, #C174C0 23.67%, #D48EB4 53.47%, #DD9CAC 75%, #E8AAA4 86.9%)",
        color:"#FFF",

    },
    // Last Div (ld) section
    ldDiv:{
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        gap:"1rem",
        alignItems:"center",
        background:"linear-gradient(91.19deg, #935CAE 14.04%, #A761B3 30.49%, #BC71BE 49.41%, #CA80BA 75.03%, #E8AAA4 98.98%)",
        padding:"1rem 0.5rem",
        width:"90%",
        margin:"0 auto",
        borderRadius:"0.5rem",
        // marginBottom:"-3rem",
    },
    lnDivHeader:{
        color:"#FFF",
    },
    lnDivBtn1:{
        borderRadius:"2rem",
        background:"#F69126",
        color:"#FFF",
        
    },
    lnDivBtn2:{
        borderRadius:"2rem",
    },
    // Footer(f) section
    ft:{
        backgroundColor:"#6F3894",
    },
    fDiv1:{
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        justifyItems:"space-between",
        width:"90%",
        margin:"0 auto",
        paddingTop:"3rem",
    },
    fDiv2:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(10rem, 1fr))",
        justifyItems:"space-between",
        width:"90%",
        margin:"0 auto",
    },

    fDiv3:{
        display:"grid",
        gridTemplateColumns:"1fr",
        justifyItems:"center",
        color:"#FFF",
    },
    fImg:{
        width:"50%",
        height:"50%",
        objectFit:"contain",
    },
    fHr:{
        color:"#FFF",
        paddingBottom:"2rem",
    },

}))

export default useStyles