import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../../assets/styles/dropdown-btn_select_languange.css';
import { DropdownHeader, Stack } from 'react-bootstrap';

interface Language {
  name: string;
  code: number | string;
  logo: string;
}

const language: Language[] = [
  { name: 'Indonesia', code: 'ID', logo: '/images/logo/logo_indonesia.png' },
  { name: 'Inggris', code: 'EN', logo: '/images/logo/logo_english.png' },
];

type DropdownButtonSelectLanguangeProps = {};

export default function DropdownButtonSelectLanguange() {
  return (
    <div className="d-none d-lg-block">
      <div className="d-flex justify-content-start align-items-center g-0 ">
        <DropdownButton
          drop="down-centered"
          autoClose="inside"
          id="dropdown-basic-button"
          className="app-dropdown-select-languange "
          title={<img src="/icons/language.svg" />}
        >
          <DropdownHeader className="text-start">
            Pilihan menu bahasa
          </DropdownHeader>
          <Dropdown.Divider></Dropdown.Divider>
          <Stack direction="vertical" gap={3}>
            {language.map((lang, index) => (
              <Dropdown.Item key={index++} href="#/action-1">
                <Stack direction="horizontal" gap={2}>
                  <img src={lang.logo} /> {lang.name}
                </Stack>
              </Dropdown.Item>
            ))}
          </Stack>
        </DropdownButton>
        <span className="dropdown-btn-languange-codename">ID</span>
      </div>
    </div>
  );
}
