

//check if demo user
exports.isDemo = async (req, res, next)=> {
    console.log(req.user.email);
    if (req.user.email === "ayushupadhyay345@gmail.com" || req.user.email === "ayush.2101009cs@iiitbh.ac.in") {
        return res.status(401).json({
            success: false,
            message: "This is a Demo User",
        });
    }
    next();
}