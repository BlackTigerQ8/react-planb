import React from "react";
import jQuery from 'jquery';
import $ from 'jquery';
import { Waypoint } from 'react-waypoint';



function Navbar(){

// ******************

// Make the Sidebar Menu Open and Close
jQuery(document).ready(function() {
 
    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
 
    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
 
    /* other code */
 
});

// Make the Sidebar Menu’s Links Work
/* Navigation */
$('a.scroll-link').on('click', function(e) {
    e.preventDefault();
    scroll_to($(this), 0);
});
 
function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if(element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}


// Make the “To Top” Button Work
$('.to-top a').on('click', function(e) {
    e.preventDefault();
    if($(window).scrollTop() != 0) {
        $('html, body').stop().animate({scrollTop: 0}, 1000);
    }
});


// Change the Sidebar’s Style / Color Scheme
$('a.btn-customized-dark').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').removeClass('light');
});
 
$('a.btn-customized-light').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').addClass('light');
});


// Highlighting the Menu’s Active Link
// $('.section-container').waypoint(function(direction) {
//     if (direction === 'down') {
//         $('.menu-elements li').removeClass('active');
//         $('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
//     }
// },
// {
//     offset: '0'
// });
 
// $('.section-container').waypoint(function(direction) {
//     if (direction === 'up') {
//         $('.menu-elements li').removeClass('active');
//         $('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
//     }
// },
// {
//     offset: '-5'
// });


// Adding a Custom Scrollbar to the Sidebar
// $('.sidebar').mCustomScrollBar({
//     theme: "minimal-dark"
// });


// ******************

    return(
<header>
{/* <!-- Wrapper --> */}
<div class="wrapper">
 
    {/* <!-- Sidebar --> */}
    <nav className="sidebar">
 
        {/* <!-- close sidebar menu --> */}
        <div class="dismiss">
            <i className="fas fa-arrow-left"></i>
        </div>
 
        <div className="logo">
            <h3><a href="index.html"></a></h3>
        </div>
 
        <ul class="list-unstyled menu-elements">
            <li class="active">
                <a className="scroll-link" href="#top-content"><i className="fas fa-home"></i> Home</a>
            </li>
            <li>
                <a className="scroll-link" href="#section-1"><i className="fas fa-cog"></i> What we do</a>
            </li>
            <li>
                <a className="scroll-link" href="#section-2"><i className="fas fa-user"></i> About us</a>
            </li>
            <li>
                <a className="scroll-link" href="#section-5"><i className="fas fa-pencil-alt"></i> Portfolio</a>
            </li>
            <li>
                <a className="scroll-link" href="#section-6"><i className="fas fa-envelope"></i> Contact us</a>
            </li>
            <li>
                <a href="#otherSections" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" role="button" aria-controls="otherSections">
                    <i className="fas fa-sync"></i>Other sections
                </a>
                <ul className="collapse list-unstyled" id="otherSections">
                    <li>
                        <a className="scroll-link" href="#section-3">Our projects</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-4">We think that...</a>
                    </li>
                </ul>
            </li>
        </ul>
 
        <div className="to-top">
            <a className="btn btn-primary btn-customized-3" href="#" role="button">
                <i className="fas fa-arrow-up"></i> Top
            </a>
        </div>
 
        <div className="dark-light-buttons">
            <a className="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
            <a className="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
        </div>
 
    </nav>
    {/* <!-- End sidebar --> */}
 
    {/* <!-- Dark overlay --> */}
    <div className="overlay"></div>
 
    {/* <!-- Content --> */}
    <div className="content">
 
        {/* <!-- open sidebar menu --> */}
        <a className="btn btn-primary btn-customized open-menu" href="#" role="button">
            <i className="fas fa-align-left"></i> <span>Menu</span>
        </a>
 
        {/* <!-- ... --> */}
 
        {/* <!-- here is the page's content (not shown here) --> */}
 
        {/* <!-- ... --> */}
 
    </div>
    {/* <!-- End content --> */}
 
</div>
{/* <!-- End wrapper --> */}

</header>
    );
};

export default Navbar;