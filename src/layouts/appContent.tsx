// // components/appContent.tsx
// const AppContent: React.FC = () => {
//   return (
//     <main className="p-6">
//       <p>Main content goes here...</p>
//     </main>
//   );
// };
// export default AppContent;

// appContent.tsx
const AppContent: React.FC = () => (
  <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
    <p>Main content goes here...</p>
  </main>
);

export default AppContent;
