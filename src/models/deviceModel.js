export const mockDeviceConfiguration = {
    defaultReplenishmentEnabled: true,
    defaultPatientResidency: "US",
    insuranceEnabled: true,
    injectors: [
        { id: 1, name: "Injector A", type: "Type A", stock: 100 },
        { id: 2, name: "Injector B", type: "Type B", stock: 50 },
    ],
    otherNonConsignmentProducts: [
        { id: 3, name: "Product C", type: "Non-Consignment", stock: 30 },
    ],
    orderWorkflow: "Standard Workflow",
    name: "Eye Order Device",
    hideNonConsignmentProductsField: false,
    hideInsuranceNameField: false,
    hideInsuranceGroupField: false,
    hideInsuranceTypeField: false,
    hideHospitalReferenceField: false,
    hideSurgeryDateField: false,
    hidePatientResidencyField: false,
    hideReplenishField: false,
    hideEyeField: false,
    hideCommentsField: false,
};
