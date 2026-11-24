type ContactDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

type Location1 = {
  country: string;
  city: string;
  address: string;
  postalCode: string;
};

type RequestDetails = {
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
};

type Attachment = {
  fileName: string;
  fileType: string;
  fileSize: number;
};

type NewRequest = {
  contactDetails: ContactDetails;
  location: Location1;
  requestDetails: RequestDetails;
  attachments: Attachment[];
};

//VALID TEST DATA

const validRequest1: NewRequest = {
  contactDetails: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phoneNumber: '+359888123456',
  },
  location: {
    country: 'Bulgaria',
    city: 'Sofia',
    address: '1 Main Street',
    postalCode: '1000',
  },
  requestDetails: {
    title: 'Internet Problem',
    description: 'Internet connection is not working.',
    priority: 'High',
  },
  attachments: [
    {
      fileName: 'screenshot.png',
      fileType: 'image/png',
      fileSize: 204800,
    },
  ],
};

const validRequest2: NewRequest = {
  contactDetails: {
    firstName: 'Maria',
    lastName: 'Petrova',
    email: 'maria.petrova@email.com',
    phoneNumber: '+359899000111',
  },
  location: {
    country: 'Bulgaria',
    city: 'Plovdiv',
    address: '15 Rose Street',
    postalCode: '4000',
  },
  requestDetails: {
    title: 'Account Access',
    description: 'Cannot log into my account.',
    priority: 'Medium',
  },
  attachments: [],
};

const validRequest3: NewRequest = {
  contactDetails: {
    firstName: 'Alex',
    lastName: 'Smith',
    email: 'alex.smith@email.com',
    phoneNumber: '+447700123456',
  },
  location: {
    country: 'UK',
    city: 'London',
    address: '22 King Road',
    postalCode: 'SW1A 1AA',
  },
  requestDetails: {
    title: 'Update Request',
    description: 'Need to update contact information.',
    priority: 'Low',
  },
  attachments: [
    {
      fileName: 'document.pdf',
      fileType: 'application/pdf',
      fileSize: 500000,
    },
  ],
};



//INVALID TEST DATA

//Missing email in contactDetails
const invalidRequest1: NewRequest = {
  contactDetails: {
    firstName: 'Peter',
    lastName: 'Ivanov',
    phoneNumber: '+359888111222',
  },
  location: {
    country: 'Bulgaria',
    city: 'Varna',
    address: '10 Sea Street',
    postalCode: '9000',
  },
  requestDetails: {
    title: 'Support Request',
    description: 'Need help with my account.',
    priority: 'High',
  },
  attachments: [],
};

//Priority value is incorrect ('Urgent' is not allowed)
const invalidRequest2: NewRequest = {
  contactDetails: {
    firstName: 'Anna',
    lastName: 'Brown',
    email: 'anna@email.com',
    phoneNumber: '+359888555666',
  },
  location: {
    country: 'Germany',
    city: 'Berlin',
    address: '5 Central Street',
    postalCode: '10115',
  },
  requestDetails: {
    title: 'System Error',
    description: 'Application crashes on launch.',
    priority: 'Urgent', //should be Low, Medium, or High
  },
  attachments: [],
};

//FileSize should be a number, not a string
const invalidRequest3: NewRequest = {
  contactDetails: {
    firstName: 'George',
    lastName: 'Wilson',
    email: 'george@email.com',
    phoneNumber: '+359888777888',
  },
  location: {
    country: 'USA',
    city: 'New York',
    address: '7 Park Avenue',
    postalCode: '10001',
  },
  requestDetails: {
    title: 'File Upload Issue',
    description: 'Upload fails every time.',
    priority: 'Medium',
  },
  attachments: [
    {
      fileName: 'report.pdf',
      fileType: 'application/pdf',
      fileSize: '500000', //should be a number
    },
  ],
};

class TestDataFactory {
  static validRequest(overrides: Partial<NewRequest> = {}): NewRequest {
    return {
      contactDetails: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        phoneNumber: '+359888123456',
      },
      location: {
        country: 'Bulgaria',
        city: 'Sofia',
        address: '1 Main Street',
        postalCode: '1000',
      },
      requestDetails: {
        title: 'Internet Problem',
        description: 'Internet connection is not working.',
        priority: 'High',
      },
      attachments: [
        {
          fileName: 'screenshot.png',
          fileType: 'image/png',
          fileSize: 204800,
        },
      ],
      ...overrides,
    };
  }
}
