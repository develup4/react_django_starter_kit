import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default ({ contracts }) => {
  const [terms, setTerms] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('/api/v1/contracts/', {
        target: data.target,
        email: data.email,
        term_start: data.term_start,
        term_end: data.term_end,
        terms1_name: data.terms1_name,
        terms1_basis: data.terms1_basis,
        terms2_name: data.terms2_name !== undefined ? data.terms2_name : '',
        terms2_basis: data.terms2_basis !== undefined ? data.terms2_basis : '',
        terms3_name: data.terms3_name !== undefined ? data.terms3_name : '',
        terms3_basis: data.terms3_basis !== undefined ? data.terms3_basis : '',
        related_contracts:
          data.related_contracts !== undefined ? data.related_contracts : [],
      });

      console.log(response);
    } catch (e) {}
  };
  const onInvalid = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <p>계약서 생성</p>
      <p>계약 대상</p>
      <input placeholder="입력해주세요" {...register('target')} />
      <p>계약 대상 담당자 이메일 주소</p>
      <input
        placeholder="manager@example.com"
        type="email"
        {...register('email')}
      />
      <p>계약 기간</p>
      <div className="flex">
        <input
          placeholder="2020-10-01"
          type="date"
          {...register('term_start')}
        />
        <p>~</p>
        <input placeholder="2022-10-01" type="date" {...register('term_end')} />
      </div>
      <p>계약 조항</p>
      {terms.length === 0 && (
        <div>
          <p>아직 추가된 조항이 없어요</p>
          <button onClick={() => setTerms([...terms, { name: '', basis: '' }])}>
            조항 추가
          </button>
        </div>
      )}
      {terms.map((term, index) => (
        <div key={index}>
          <p>{`조항 ${index + 1}: 조항명`}</p>
          <input
            placeholder="입력해주세요"
            {...register(`terms${index + 1}_name`)}
          />
          <p>{`조항 ${index + 1}: 근거`}</p>
          <input
            placeholder="입력해주세요"
            {...register(`terms${index + 1}_basis`)}
          />
          <button
            type="button"
            onClick={() => {
              if (terms.length < 3) setTerms([...terms, {}]);
            }}
          >
            조항 추가
          </button>
        </div>
      ))}
      <p>관련 계약</p>
      <select multiple {...register('related_contracts')}>
        <option value="female">female</option>
        <option value="asdf">asdf</option>
        {contracts.map((contract, index) => (
          <option key={index} value="female">
            female
          </option>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
};
