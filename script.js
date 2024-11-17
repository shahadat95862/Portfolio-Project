// ফর্ম সাবমিট হ্যান্ডলিং
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // ফর্মের ডিফল্ট সাবমিট হওয়া বন্ধ করা

    // ফর্ম ডাটা নিয়ে প্রক্রিয়া শুরু
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name && email && message) {
        alert("ধন্যবাদ! আপনার বার্তা প্রেরিত হয়েছে।");
    } else {
        alert("দয়া করে সকল তথ্য পূর্ণ করুন।");
    }

    // ফর্ম ফিল্ডগুলো পরিষ্কার করা
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
});

// স্ক্রল টু টপ বাটন
let scrollTopButton = document.createElement("button");
scrollTopButton.textContent = "↑";
scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "20px";
scrollTopButton.style.right = "20px";
scrollTopButton.style.padding = "10px";
scrollTopButton.style.fontSize = "20px";
scrollTopButton.style.backgroundColor = "#333";
scrollTopButton.style.color = "#fff";
scrollTopButton.style.border = "none";
scrollTopButton.style.borderRadius = "5px";
scrollTopButton.style.cursor = "pointer";
document.body.appendChild(scrollTopButton);

// স্ক্রল টু টপ ফাংশন
scrollTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// স্ক্রল বাটন প্রদর্শন/লুকানো
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

// টেস্টিমোনিয়াল স্লাইডার (স্মল ইফেক্ট)
let testimonials = document.querySelectorAll("blockquote");
let currentTestimonialIndex = 0;

function showNextTestimonial() {
    testimonials[currentTestimonialIndex].style.display = "none"; // পুরোনো টেস্টিমোনিয়াল লুকানো
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    testimonials[currentTestimonialIndex].style.display = "block"; // নতুন টেস্টিমোনিয়াল প্রদর্শন
}

// শুরুতেই প্রথম টেস্টিমোনিয়াল দেখানো
testimonials[currentTestimonialIndex].style.display = "block";

// প্রতি 5 সেকেন্ড পরপর টেস্টিমোনিয়াল পরিবর্তন করা
setInterval(showNextTestimonial, 5000);
