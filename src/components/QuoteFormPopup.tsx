import React, { useEffect, memo } from 'react';
import { X } from 'lucide-react';

interface QuoteFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteFormPopupComponent: React.FC<QuoteFormPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Remove any existing form containers
    const existingForm = document.getElementById('b24-form-inline-6-y2n91x');
    if (existingForm) {
      existingForm.innerHTML = '';
    }

    // Load Bitrix24 form script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.bitrix24.com/b52613/crm/site_button/loader_2_tzb27l.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup script and form when component unmounts or form closes
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Remove any Bitrix24 related elements
      const b24Forms = document.querySelectorAll('[class^="b24-"]');
      b24Forms.forEach(form => {
        if (form.parentNode) {
          form.parentNode.removeChild(form);
        }
      });
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        {/* Center modal */}
        <div className="inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Modal header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Get Your Free Quote
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Modal content */}
          <div className="px-6 py-4">
            <div id="b24-form-inline-6-y2n91x" className="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuoteFormPopup = memo(QuoteFormPopupComponent);

export default QuoteFormPopup;
