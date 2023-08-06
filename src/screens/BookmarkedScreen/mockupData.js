//mockupData for testing purpose
export const bookmarkData = [
  {
    id: 1,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 2,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 3,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 4,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 5,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  // Add more bookmarkData objects as needed
];

// Function to retrieve saved resources for a given user ID
export const getSavedResourcesByUserId = (userId) => {
  const savedResources = bookmarkData.filter((resource) => resource.id === userId);
  return savedResources;
};
