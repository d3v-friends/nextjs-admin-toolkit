"use client";
import {
	ActAskForm,
	ActAskFormConfirmBox,
	ActErrors,
	ActResponseModal,
	Button,
	InputField,
	InputOptions,
	InputString,
	Panel,
	Title,
	VId,
} from "@root";
import {NextPageProps, useServerAction} from "nextjs-tools";
import React from "react";
import Action from "./action";
import Form from "./form";

export default function ({}: NextPageProps) {
	const [state, action, pending] = useServerAction(Action, Form);
	const {username, password, opts} = state.string;
	return (
		<Panel>
			<Title>Action</Title>
			<ActAskForm
				action={action}
				pending={pending}
				ask={(onConfirm, onCancel) => (
					<ActAskFormConfirmBox
						onConfirm={onConfirm}
						onCancel={onCancel}>
						확인모달
					</ActAskFormConfirmBox>
				)}>
				{(onOpen, onClose) => (
					<div className="grid grid-cols-1 gap-4">
						<InputField label="필드">
							<VId>12354ABCD</VId>
						</InputField>
						<InputString
							{...Form.username}
							label="아이디"
							defaultValue={username}
							required
						/>

						<InputString
							{...Form.password}
							label="비밀번호"
							defaultValue={password}
							required>
							<Button buttonStyle="outlined">찾기</Button>
						</InputString>

						<InputOptions
							{...Form.opts}
							options={["A", "B", "C"]}
							label="선택형 옵션(리스트)"
							defaultValue={opts}
						/>
						<Button
							type="button"
							onClick={onOpen}>
							확인
						</Button>
					</div>
				)}
			</ActAskForm>

			<ActErrors state={state} />
			<ActResponseModal state={state}>
				{(onClose) => (
					<div className="min-w-[200px]">
						<h4 className="mb-5">응답 모달</h4>
						<Button
							className="w-full"
							onClick={onClose}>
							닫기
						</Button>
					</div>
				)}
			</ActResponseModal>
		</Panel>
	);
}
