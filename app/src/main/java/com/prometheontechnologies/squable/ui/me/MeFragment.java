package com.prometheontechnologies.squable.ui.me;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

import com.prometheontechnologies.squable.databinding.FragmentMeBinding;

public class MeFragment extends Fragment {

    private FragmentMeBinding binding;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        MeViewModel meViewModel =
                new ViewModelProvider(this).get(MeViewModel.class);

        binding = FragmentMeBinding.inflate(inflater, container, false);
        View root = binding.getRoot();

        final TextView textView = binding.textMe;
        meViewModel.getText().observe(getViewLifecycleOwner(), textView::setText);
        return root;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}