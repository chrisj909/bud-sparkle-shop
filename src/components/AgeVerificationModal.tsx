import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const AgeVerificationModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasVerified, setHasVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (verified) {
      setHasVerified(true);
      setIsOpen(false);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("ageVerified", "true");
    setHasVerified(true);
    setIsOpen(false);
  };

  if (hasVerified) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-6 max-w-md w-full animate-fadeIn">
          <h2 className="text-2xl font-bold mb-4 text-center">Age Verification Required</h2>
          <p className="text-gray-600 mb-6 text-center">
            You must be 21 years or older to visit this website.
          </p>
          <div className="flex flex-col gap-3">
            <Button onClick={handleVerify} className="w-full bg-primary hover:bg-primary-hover">
              I am 21 or older
            </Button>
            <Button
              onClick={() => window.location.href = "https://google.com"}
              variant="outline"
              className="w-full"
            >
              I am not 21
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};