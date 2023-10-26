import React, { useState } from 'react';
import styles from './style.module.css';

const SmartHouse = () => {
  const [device, setDevice] = useState([
    { id: 1, name: 'Лампочка', isPower: false, isEdit: false },
    { id: 2, name: 'Телевизор', isPower: false, isEdit: false },
    { id: 3, name: 'Колонка', isPower: false, isEdit: false },
  ]);

  const [addValue, setAddValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [editDeviceName, setEditDeviceName] = useState('');

  // Add
  const handleAdd = () => {
    if (addValue.trim() !== '') {
      if (device.length === 0) {
        setDevice([{ id: 1, name: addValue, isPower: false, isEdit: false }]);
      } else {
        setDevice((prevDevice) => [
          ...prevDevice,
          { id: prevDevice[prevDevice.length - 1].id + 1, name: addValue, isPower: false, isEdit: false },
        ]);
      }
      setAddValue('');
      setInputError('');
    } else {
      setInputError('Введите имя устройства');
    }
  };

  // Delete
  const handleDelete = (idDevice) => {
    setDevice(() => device.filter((el) => el.id !== idDevice));
  };

  // Power
  const handlePower = (idDevice) => {
    setDevice(() =>
      device.map((el) => {
        if (el.id === idDevice) {
          return { ...el, isPower: !el.isPower };
        }
        return el;
      })
    );
  };

  // Start Editing
  const startEditing = (idDevice) => {
    setDevice(() =>
      device.map((el) => {
        if (el.id === idDevice) {
          return { ...el, isEdit: true };
        }
        return el;
      })
    );
    const deviceToEdit = device.find((el) => el.id === idDevice);
    if (deviceToEdit) {
      setEditDeviceName(deviceToEdit.name);
    }
  };

  // Save Edit
  const saveEdit = (idDevice) => {
    if (editDeviceName.trim() !== '') {
      setDevice(() =>
        device.map((el) => {
          if (el.id === idDevice) {
            return { ...el, name: editDeviceName, isEdit: false };
          }
          return el;
        })
      );
    }
  };

  return (
    <div>
      <div>Smart house devices</div>
      <div>
        <input value={addValue} onChange={(e) => setAddValue(e.target.value)} />
        <button onClick={handleAdd}>Add device</button>
        <div className={styles.error}>{inputError}</div>
      </div>
      <div className={styles.cont_items}>
        {device.map((item) => {
          return (
            <div key={item.id}>
              <div className={styles.item}>
                {item.isEdit ? (
                  <div>
                    <input value={editDeviceName} onChange={(e) => setEditDeviceName(e.target.value)} />
                    <button onClick={() => saveEdit(item.id)}>Save</button>
                  </div>
                ) : (
                  <div>{item.name}</div>
                )}
                <div>
                  {!item.isEdit && (
                    <>
                      <button onClick={() => startEditing(item.id)}>Edit</button>
                      <button
                        onClick={() => handlePower(item.id)}
                        style={item.isPower ? { background: 'lightblue' } : { background: '#3a39517c' }}
                      >
                        {item.isPower ? 'Turn off' : 'Turn on'}
                      </button>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartHouse;
