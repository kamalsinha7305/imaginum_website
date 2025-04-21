import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Show loader for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        isLoading && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black/50"
            >
                <div className="w-full absolute top-0 left-0 bg-transparent h-1">
                    {/* The actual progress bar */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 1, // Same as loading time
                            ease: "easeInOut",
                        }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                </div>
            </motion.div>
        )
    );
};

export default Loader;
