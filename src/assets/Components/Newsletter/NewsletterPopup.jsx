import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "./NewsletterPopup.css";

const NewsletterPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    // Auto open popup after 5 sec (only once)
    useEffect(() => {
        const subscribed = localStorage.getItem("newsletter_subscribed");
        if (!subscribed) {
            const timer = setTimeout(() => setShowPopup(true), 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);

        const formData = new FormData();
        formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY_2);
        formData.append("email", email);
        formData.append("subject", "🎉 New Newsletter Subscriber");
        formData.append(
            "message",
            `New user subscribed to your portfolio newsletter.\n\nSubscriber Email: ${email}`
        );
        formData.append("from_name", "Portfolio Newsletter");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                toast.success("🎉 Successfully Joined Newsletter!");
                localStorage.setItem("newsletter_subscribed", "true");
                setShowPopup(false);
                setEmail("");
            } else {
                toast.error("❌ Submission failed!");
            }
        } catch {
            toast.error("⚠ Network error!");
        }

        setLoading(false);
    };

    return (
        <>
            {/* Button for manual open */}
            <button className="open-newsletter" onClick={() => setShowPopup(true)}>
                Join Newsletter
            </button>

            {/* Popup Overlay */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box premium-popup animate-popup">
                        {/* Close Button */}
                        <button
                            className="close-btn"
                            onClick={() => {
                                localStorage.setItem("newsletter_subscribed", "true");
                                setShowPopup(false);
                            }}
                        >
                            ✖
                        </button>

                        {/* Popup Content */}
                        <h2 className="popup-title">Join Our Newsletter</h2>
                        <p className="popup-desc">
                            Get the latest tech articles, projects, and tips delivered directly to your inbox.
                        </p>

                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label>Enter Your Email Address</label>
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? "Joining..." : "Subscribe 📩"}
                            </button>
                        </form>

                        <p className="popup-footer">
                            We respect your privacy. No spam, unsubscribe anytime.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsletterPopup;
