import { useEffect } from 'react';

const Results = () => {
  useEffect(() => {
    sessionStorage.setItem('originalPageUrl', window.location.href);
    window.open('https://results.jntukucev.ac.in/', '_blank');
    const desiredUrl = `${window.location.origin}/ExaminationMain`;
    window.history.replaceState({}, null, desiredUrl);
  }, []);

  return null;
};

export default Results;
