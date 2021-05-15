import styled from '@emotion/styled'
export const SidebarContainer = styled.div`
width: ${p => p.isSidebarOpen ? '20%' : '5%'};
background:darkgreen;
max-width:280px
min-width:80px
background-color: #306844;
background-image: linear-gradient(314deg, #306844 0%, #2c4c3b 74%);
color:#ffa41b;
position:relative; //toggler
transition: .2s ease-in all
`

export const SidebarHeader = styled.h3`
padding:20px 0;
text-align:center;
margin-bottom:10px;
letters-spacing:6px;
font-size:28px;
`
export const MenuItemContainer = styled.div`

`
export const MenuItem = styled.div`
${p => !p.isSidebarOpen &&
        `text-align:center;
 ${p.Selected && 'background:lightgreen'};
 
`
    };
padding:6px 20px;
font-weight:600;
color:${p => p.selected ? 'white;color:#ffa41b' : 'white'};
white-space:nowrap;
&:hover{
    background:lightgreen;
    display:block;
    margin-top:0;
    padding-bottom:14px;
    transition: .1s ease-in all;
    color:white

}
&:after{
    content:'';
}

${p => !p.selected && `
 &:hover{
    &:after{
         transition: .1s ease-in all;
    }
}


` }
`

export const Text = styled.p`
display:${p => p.isSidebarOpen ? 'inline' : 'none'};
font-size:16px;
`

export const Icon = styled.img`
${p => p.isSidebarOpen && 'padding:40px 30px 0 10px; transition:.1s ease-in padding-right'};

height:16px;
width:16px;
color:#ffa41b;
padding-top:40px;

`

//Toggler-----------------------------------------------------

export const TogglerContainer = styled.div`
position:absolute;
width: 60%;
bottom:10%;
left:30%;
padding-left:3px;
right:0;
margin:0 auto:
`

export const Toggler = styled.div`
   height:40px;
   cursor:pointer;
   
   position:relative; //to toggle button horizontal lines
   &:after{
       content:'';
       position:absolute;
        left:0;
        top:.25em;
        width:50%;
        height:.1em;
        background:#ffa41b;
        box-shadow:
        0 0.75em 0 0 #ffa41b,
        0 1.5em 0 0 #ffa41b;
     
    }
   
   `