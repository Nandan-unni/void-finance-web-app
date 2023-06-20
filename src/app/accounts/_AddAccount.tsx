import { Form, Input, InputNumber, Modal, Select } from "antd";
import React from "react";

const AddAccount = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      title="Add new account"
      centered
      okText="Add Account"
      open={open}
      onCancel={onClose}
    >
      <Form layout="vertical">
        <Form.Item label="Label" name="title">
          <Input placeholder="eg: 'My Salary account' or 'ABC Bank Savings Account'" />
        </Form.Item>
        <Form.Item label="Bank">
          <Select placeholder="Select your bank">
            <Select.Option key="sbi">State Bank of India</Select.Option>
            <Select.Option key="fdrl">Federal Bank</Select.Option>
            <Select.Option key="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Type">
          <Select placeholder="Select your account type">
            <Select.Option key="savings">Savings</Select.Option>
            <Select.Option key="salary">Salary</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Balance">
          <InputNumber
            min={0}
            placeholder="Enter your account balance (Enter 0 if you don't wish to)"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddAccount;
