import React from "react";

const Card = ({ title, children, footer }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md max-w-sm">
      <h3 className="font-semibold mb-3 text-gray-800">{title}</h3>

      <div className="text-sm text-gray-700 space-y-2">{children}</div>

      {footer && <div className="pt-2 text-xs text-gray-500">{footer}</div>}
    </div>
  );
};

const ComposeComponentsExample = () => {
  return (
    <div className="space-y-4">
      <Card
        title="User Profile"
        footer="Last login: 2 hours ago">
        <p><strong>Name:</strong>Kevin Tank</p>
        <p><strong>Email:</strong> kevintank07@gmail.com</p>
      </Card>

      <Card title="New Notification" footer="5 mins ago">
        <p>You have a new friend request from deep.</p>
      </Card>

      <Card
        title="React Composition"
        footer="just now">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam aliquam sequi iste dicta quod veniam quisquam optio eos iusto nemo odit nulla officiis necessitatibus quae cum fuga, exercitationem quia?
        </p>
      </Card>
    </div>
  );
};

export default ComposeComponentsExample;
