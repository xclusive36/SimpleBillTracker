import { useEffect, useState } from "react";

const CloudKit = require("https://cdn.apple-cloudkit.com/ck/1/cloudkit.js");

CloudKit.configure({
  containers: [
    {
      containerIdentifier: import.meta.env.VITE_CONTAINERID, // Your container ID (e.g. "iCloud.com.example.MyApp")
      apiToken: import.meta.env.VITE_APITOKEN, // Your API token (e.g. "a1b2c3d4e5f6g7h8i9j0")
      environment: "development", // or "production"
    },
  ],
});
const container = CloudKit.getDefaultContainer();
const [record, setRecord] = useState<any>(null);

const CloudKitComponent = () => {
  useEffect(() => {
    const query = {
      recordType: "test", // Your record type (e.g. "MyRecordType")
    };

    container
      .publicCloudDatabase()
      .performQuery(query)
      .then((response: any) => {
        if (response.hasErrors) {
          console.error(response.errors[0]);
        } else {
          setRecord(response.records[0]);
        }
      });
  }, []);

  const saveRecord = () => {
    const record = {
      recordType: "test",
      fields: {
        myField: {
          value: "Hello, World!",
        },
      },
    };

    container
      .publicCloudDatabase()
      .saveRecord(record)
      .then((response: any) => {
        if (response.hasErrors) {
          console.error(response.errors[0]);
        } else {
          console.log("Record saved!");
        }
      });
  };

  const deleteRecord = () => {
    container
      .publicCloudDatabase()
      .deleteRecord("recordID")
      .then((response: any) => {
        if (response.hasErrors) {
          console.error(response.errors[0]);
        } else {
          console.log("Record deleted!");
        }
      });
  };

  const updateRecord = () => {
    const record = {
      recordType: "bills",
      recordName: "recordID",
      fields: {
        myField: {
          value: "Hello, World!",
        },
      },
    };

    container
      .publicCloudDatabase()
      .saveRecord(record)
      .then((response: any) => {
        if (response.hasErrors) {
          console.error(response.errors[0]);
        } else {
          console.log("Record updated!");
        }
      });
  }

  const fetchRecord = () => {
    const query = {
      recordType: "recordID",
      recordName: "bills",
    };

    container
      .publicCloudDatabase()
      .fetchRecord(query)
      .then((response: any) => {
        if (response.hasErrors) {
          console.error(response.errors[0]);
        } else {
          console.log(response.record);
        }
      });
  }

  return <div>{record ? record.fields.myField.value : "Loading..."}</div>;
};

export default CloudKitComponent;
