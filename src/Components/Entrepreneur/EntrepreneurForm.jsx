import React, { useState } from 'react';
import './EntrepreneurForm.css';

const EntrepreneurForm = () => {
  const steps = [
    { name: 'companyName', label: 'Company Name', type: 'text', optional: false },
    { name: 'foundedDate', label: 'Founded Date', type: 'date', optional: false },
    { name: 'teamSize', label: 'Team Size', type: 'number', optional: false },
    { name: 'industry', label: 'Industry', type: 'text', optional: false },
    { name: 'stage', label: 'Stage', type: 'select', options: ['Idea', 'Prototype', 'Early Stage', 'Growth', 'Mature'], optional: false },
    { name: 'pitchDeck', label: 'Pitch Deck', type: 'file', optional: true },
    { name: 'bio', label: 'Bio', type: 'textarea', optional: true },
    { name: 'location', label: 'Location', type: 'text', optional: true },
    { name: 'website', label: 'Website', type: 'text', optional: true },
    { name: 'linkedin', label: 'LinkedIn', type: 'text', optional: true },
    { name: 'github', label: 'GitHub', type: 'text', optional: true },
    { name: 'twitter', label: 'Twitter', type: 'text', optional: true }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    console.log('Entrepreneur Form Submitted:', formData);
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleChange = (e) => {
    const { name, type, files, value, checked } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const renderStep = () => {
    const step = steps[currentStep];
    switch (step.type) {
      case 'textarea':
        return <textarea name={step.name} value={formData[step.name] || ''} onChange={handleChange} />;
      case 'select':
        return (
          <select name={step.name} value={formData[step.name] || ''} onChange={handleChange}>
            <option value="">-- Select --</option>
            {step.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'checkbox':
        return <input type="checkbox" name={step.name} checked={formData[step.name] || false} onChange={handleChange} />;
      case 'file':
        return <input type="file" name={step.name} onChange={handleChange} />;
      default:
        return <input type={step.type} name={step.name} value={formData[step.name] || ''} onChange={handleChange} />;
    }
  };

  return (
    <div className="entrepreneur-form">
      <h2>Entrepreneur Information</h2>
      <div className="form-step">
        <label>{steps[currentStep].label}</label>
        {renderStep()}
      </div>
      <div className="form-buttons">
        {currentStep < steps.length - 1 ? (
          <>
            <button onClick={handleSkip}>Skip</button>
            <button onClick={handleNext}>Next</button>
          </>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default EntrepreneurForm;
