export const isPatient = (currentUser) => 
{
  return currentUser === 'patient';
}

export const isDoctor = (currentUser) => 
{
  // Add your logic to determine if the current user is a doctor
  return currentUser === 'doctor'; // Replace this with your actual logic
};